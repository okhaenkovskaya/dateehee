import Link from 'next/link';

function MainNavigation() {
  return (
    <header className='p-5 flex justify-between'>
      <span className="md:text-2xl">DataArt Winter IT Camp 2025</span>
      <nav>
        <ul className='flex'>
          <li className='ml-3'>
            <Link
              className='p-1'
              href='https://www.linkedin.com/in/oksana-prokopenko-144752b0/'>LinkedIn</Link>
          </li>
          <li className='ml-3'>
            <Link
              className='p-1'
              href='#'>GIT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
