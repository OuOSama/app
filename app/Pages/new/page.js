'use client'
import { useSession } from 'next-auth/react';

async function addHandler(session) {
  const testData = {
    name: session.user.name,
    email: session.user.email,
    money: 1000000
  };

  try {
    const response = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ collectionName: 'test', docData: testData })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.log('Something went wrong with API:', error);
  }
}


export default function Page() {
  const { data: session } = useSession();
  return (
    <div className='flex h-screen w-full items-center justify-center flex-col'>
      <button className='btn' onClick={() => addHandler(session)}>Add Test</button>
    </div>
  );
}
