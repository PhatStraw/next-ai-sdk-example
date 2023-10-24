'use client'
 
import { useCompletion } from 'ai/react';

export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  return (
    <div className="mx-auto max-w-md py-24">
      <h1 className="text-2xl font-bold mb-4">Slogan Generator</h1>
      <div className="shadow p-4 rounded">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full text-black border border-gray-300 rounded mb-4 p-2"
            value={input}
            placeholder="Describe your business..."
            onChange={handleInputChange}
          />
        </form>
        {completion ? (
          <div className="whitespace-pre-wrap my-4">{completion}</div>
        ) : (
          <div className="text-gray-500">Enter a business description to generate slogans.</div>
        )}
      </div>
    </div>
  );
}