import React from 'react'
type Props = {
minTens,
minUnits,
secTens,
secUnits,
}
export default function Timer(props:Props) {
  return (
    <div className="w-full mt-4" role="timer" aria-label="Time spent on page">
      <div className="flex flex-col space-y-3">
        <span className="sm:text-xl font-Futuristic text-gradient">⏱ Time you spent</span>
        <div className="flex flex-row space-x-6 justify-center" aria-live="polite">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex flex-row space-x-1" aria-label="Minutes">
              <div className="flex flex-col space-y-1 items-center">
                <div className="timer-digit sm:w-10 w-7 sm:h-12 h-9 rounded-lg flex justify-center items-center">
                  <span
                    ref={props.minTens}
                    className="text-neonBlue font-mono sm:text-2xl text-lg font-bold"
                    aria-hidden="true"
                  >
                    0
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <div className="timer-digit sm:w-10 w-7 sm:h-12 h-9 rounded-lg flex justify-center items-center">
                  <span
                    ref={props.minUnits}
                    className="text-neonBlue font-mono sm:text-2xl text-lg font-bold"
                    aria-hidden="true"
                  >
                    0
                  </span>
                </div>
              </div>
            </div>
            <span className="sm:text-sm text-xs text-gray-400 font-Futuristic uppercase tracking-wider">Minutes</span>
          </div>
          <div className="flex items-center pb-6" aria-hidden="true">
            <span className="text-neonPink text-2xl font-bold animate-pulse">:</span>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex flex-row space-x-1" aria-label="Seconds">
              <div className="flex flex-col space-y-1 items-center">
                <div className="timer-digit sm:w-10 w-7 sm:h-12 h-9 rounded-lg flex justify-center items-center">
                  <span
                    ref={props.secTens}
                    className="text-neonBlue font-mono sm:text-2xl text-lg font-bold"
                    aria-hidden="true"
                  >
                    0
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-1 items-center">
                <div className="timer-digit sm:w-10 w-7 sm:h-12 h-9 rounded-lg flex justify-center items-center">
                  <span
                    ref={props.secUnits}
                    className="text-neonBlue font-mono sm:text-2xl text-lg font-bold"
                    aria-hidden="true"
                  >
                    0
                  </span>
                </div>
              </div>
            </div>
            <span className="sm:text-sm text-xs text-gray-400 font-Futuristic uppercase tracking-wider">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  )
}
