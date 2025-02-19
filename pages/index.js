import {useEffect, useState} from 'react';
import Loader from '@/components/common/loader';
import {getData} from '@/services/joke';

function HomePage() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    getData().then(data => setJoke(data));
  },[]);

  return (
    <div className="p-5 min-h-screen flex items-center justify-center bg-indigo-400 text-3xl">
      <div className="text-white text-center">
        {joke ? <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
              {joke.question}
            </h1>
            <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              {joke.answer}
            </p>

            {joke.votes?.length && (
              <ul className="flex flex-wrap items-center justify-center">
                {joke.votes.map(vote => (
                  <li key={vote.label} className="m-4">
                    <button type="button"
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
                className="inline-flex items-center justify-center px-5 py-3 mx-1 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Next Joke
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
