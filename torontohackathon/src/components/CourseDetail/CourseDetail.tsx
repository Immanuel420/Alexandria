import { getAllPrograms, IProgram, contracts } from '../../api';
import { walletProvider } from '../../api/blockchain';
import { useEffect, useState } from 'react';
import { BigNumber, ethers } from 'ethers';

import Question from './Question';
import './CourseDetail.css';

function CourseDetail(props: { provider: ethers.providers.Web3Provider }) {
  const [answer, setAnswer] = useState({});
  const [program, setProgram] = useState<IProgram | undefined>(undefined);
  const [isTakingQuiz, setIsTakingQuiz] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const loadProgram = async () => {
    const programs = await getAllPrograms(props.provider);
    setProgram(programs[0]);
  };

  const onSelectAnswer = async (i: number, choice: string) => {
    const newAnswer = {
      ...answer,
      [i]: choice,
    };
    setAnswer(newAnswer);
  };

  const onClickHandler = async () => {
    if (isTakingQuiz && program) {
      // Convert answer object to answer[]
      const answerArr: string[] = Object.values(answer);

      // Check Answer
      const isCorrect =
        answerArr.length == program.questions.length &&
        (await contracts.checkAnswer(walletProvider, program.id.toNumber(), answerArr));

      if (isCorrect) {
        setIsCorrect(true);
        contracts.learnProgram(walletProvider, program.id.toNumber(), answerArr);
      } else {
        setIsCorrect(false);
      }
    } else {
      setIsTakingQuiz(true);
    }
  };

  useEffect(() => {
    loadProgram();
  }, []);

  return (
    <div className="Coures-Detail">
      {program ? (
        <div className="Course-Detail-Wrapper">
          <div className="info-bar">
            <p className="info-bar-browse">{'Browse Courses >'}</p>
            <p className="info-bar-title">{program.title}</p>
          </div>
          {/*<CourseBanner></CourseBanner> */}
          <div className="Reward-Progress">
            <div className="Reward-Progress-Title">
              <p>Reward Distributed:</p>
              <p>
                {program.reward.rewardDistributed +
                  '/' +
                  BigNumber.from(program.reward.rewardAddressCap).mul(
                    program.reward.rewardPerAddress,
                  ) +
                  ' Token'}
              </p>
            </div>
            <div className="Progress-Bar-Container">
              <div
                className="Progress-Bar-Filler"
                style={{
                  width:
                    Math.round(
                      BigNumber.from(program.reward.rewardDistributed)
                        .div(
                          BigNumber.from(program.reward.rewardAddressCap).mul(
                            program.reward.rewardPerAddress,
                          ),
                        )
                        .toNumber(),
                    ) + '%',
                }}
              ></div>
            </div>
          </div>
          <div className="video-responsive">
            <iframe
              width="100%"
              height="550"
              src={
                'https://www.youtube.com/embed/' +
                program.link.substring(program.link.indexOf('watch?v=') + 8)
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          {isTakingQuiz ? (
            <div className="Questions">
              <p>Select the correct answer.</p>
              {program.questions.map((v, i) => {
                return (
                  <Question key={v.title} data={{ ...v, number: i + 1, onSelectAnswer }}></Question>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
          <button className="Quiz-Button" onClick={onClickHandler}>
            {isTakingQuiz ? 'Submit Quiz' : 'Take Quiz'}
          </button>
          <p className="Question-Reward">
            {'Reward ' + program.reward.rewardPerAddress + ' Token'}
          </p>
          {isCorrect == false ? (
            <p>Submitted answer is incorrect. Please try again.</p>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="Course-Detail-Wrapper"></div>
      )}
    </div>
  );
}

export default CourseDetail;
