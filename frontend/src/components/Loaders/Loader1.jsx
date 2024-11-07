import React from 'react';

const Loader1 = () => {
  return (
    <div className="flex justify-center items-center ">
      <svg
        width="306"
        height="306"
        viewBox="0 0 206 206"
        xmlns="http://www.w3.org/2000/svg"
        className="pt-24"
      >
        {/* Big Cube */}
        <g
          id="BigCube"
          className="origin-center animate-bigcubemotion"
        >
          <polygon fill="#1E3A8A" points="16.402,53.002 16.402,53.002 103.002,103.001 189.604,53.002 103.002,3.002" /> {/* Dark Blue */}
          <polygon fill="#2563EB" points="103.002,103.001 103.002,203 103.002,203.001 189.604,153.001 189.604,53.002 103.002,103.001" /> {/* Blue */}
          <polygon fill="#3B82F6" points="16.4,53.002 16.402,153.001 103.002,203.001 103.002,203 103.002,103.001 103.002,103.001 16.402,53.002" /> {/* Light Blue */}
        </g>

        {/* Little Cube */}
        <g
          id="LittleCube"
          className="origin-center animate-littlecubemotion"
        >
          <polygon fill="#1E3A8A" points="146.301,128.001 146.301,128.001 103,103.001 59.7,128.001 103,153.001" /> {/* Dark Blue */}
          <polygon fill="#2563EB" points="103.002,103.001 103.002,53.002 103,53.002 59.7,78.002 59.7,128.001 103,103.001" /> {/* Blue */}
          <polygon fill="#3B82F6" points="146.303,128.001 146.301,78.002 103,53.002 103.002,53.002 103.002,103.001 103,103.001 146.301,128.001" /> {/* Light Blue */}
        </g>

        {/* Secret Cube */}
        <g
          id="SecretCube"
          className="origin-center animate-secretcubemotion"
        >
          <polygon fill="#1E3A8A" points="146.301,128.001 146.301,128.001 103,103.001 59.7,128.001 103,153.001" /> {/* Dark Blue */}
          <polygon fill="#2563EB" points="103.002,103.001 103.002,53.002 103,53.002 59.7,78.002 59.7,128.001 103,103.001" /> {/* Blue */}
          <polygon fill="#3B82F6" points="146.303,128.001 146.301,78.002 103,53.002 103.002,53.002 103.002,103.001 103,103.001 146.301,128.001" /> {/* Light Blue */}
        </g>
      </svg>
    </div>
  );
};

export default Loader1;
