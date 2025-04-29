import { useEffect, useState } from "react";
import Logo from "../components/Logo";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <Logo
        sentence="M. Ahmed"
        manualMode={false}
        blurAmount={5}
        borderColor="lightblue"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />


      <div className="w-[200px] mt-5 h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div
          className="h-full bg-blue-300 shadow-[0_0_20px_#3b82f6] transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
