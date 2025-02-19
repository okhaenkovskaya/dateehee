import {useEffect, useState} from 'react';
import Loader from '@/components/common/loader';
import {getData, sendData, deleteData} from '@/services/joke';

function HomePage() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData().then(data => setJoke(data));
  },[]);

  const getNewJoke = () => {
    setIsLoading(true);

    getData().then(data => {
      if (data.id !== joke.id) {
        setJoke(data)
      } else getNewJoke();
    }).finally(() => setIsLoading(false));
  };

  const deleteJoke = () => {
    setIsLoading(true);

    deleteData(joke.id).then(() => getNewJoke()).finally(() => setIsLoading(false));
  };

  async function updateHandler(e, label) {
    e.preventDefault();

    setIsLoading(true);
    const updatedVotes = joke.votes.map(vote => {
      return vote.label === label ? {value: vote.value + 1, label: vote.label} : vote;
    });
    const updatedJoke = {
      id: joke.id,
      question: joke.question,
      answer: joke.answer,
      votes: updatedVotes,
      availableVotes: joke.availableVotes,
    };
    await sendData(updatedJoke)
      .then(() => setJoke(updatedJoke))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="p-5 min-h-screen flex items-center justify-center bg-indigo-400 text-3xl">
      <div className="text-white text-center">
        {joke ? <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
              {joke.question}
            </h1>
            <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
              {joke.answer}
            </p>

            {joke.votes?.length && (
              <ul className="flex flex-wrap items-center justify-center">
                {joke.votes.map(vote => (
                  <li key={vote.label} className="m-4">
                    <button type="button"
                            disabled={isLoading}
                            onClick={(e) => updateHandler(e, vote.label)}>
                      {vote.label}
                      <span className="ml-2">{vote.value}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="inline-flex">
              <button
                type="button"
                onClick={getNewJoke}
                disabled={isLoading}
                className="inline-flex items-center justify-center px-5 py-3 mx-1 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                {isLoading ? <Loader size={6} /> : 'Next Joke'}
              </button>
              <button
                type="button"
                onClick={deleteJoke}
                disabled={isLoading}
                className="inline-flex items-center justify-center px-5 py-3 mx-1 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                {isLoading ? <Loader size={6} /> : 'Delete Joke'}
              </button>
            </div>
          </>
          :
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <Loader size={16} />
          </div>}
      </div>
    </div>
  );
}

export default HomePage;
