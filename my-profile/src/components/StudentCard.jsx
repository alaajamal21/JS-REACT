
import { useState } from "react";
import {
  UserRound,
  Heart,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  University,
  BookOpen,
  Code2
} from "lucide-react";

function StudentCard({ student, children }) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100">
          <UserRound
            size={27}
            strokeWidth={1.8}
            className="text-gray-900"
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            {student.name}
          </h1>

          <p className="mt-1 text-sm leading-relaxed text-gray-500">
            {children}
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <University
            size={19}
            className="shrink-0 text-gray-500"
          />
          <p className="text-sm text-gray-700">
            {student.university}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <GraduationCap
            size={19}
            className="shrink-0 text-gray-500"
          />
          <p className="text-sm text-gray-700">
            {student.degree}
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <div className="flex items-center justify-between">
        <button
          onClick={() => setLikes(prev => prev + 1)}
          className="flex cursor-pointer items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Like
          <Heart size={17} />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            Likes {likes}
          </span>
          <Heart
            size={19}
            className="text-red-500"
          />
        </div>
      </div>

      <button
        onClick={() => setShowDetails(prev => !prev)}
        className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
      >
        {showDetails ? (
          <ChevronUp size={19} />
        ) : (
          <ChevronDown size={19} />
        )}

        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="mt-5 space-y-4 rounded-xl bg-gray-50 p-5">
          <h3 className="text-base font-semibold text-gray-900">
            Additional Information
          </h3>

          <div className="flex items-center gap-3">
            <BookOpen
              size={18}
              className="shrink-0 text-gray-500"
            />
            <p className="text-sm text-gray-700">
              <span className="font-medium">Course:</span>{" "}
              {student.course}
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Code2
              size={18}
              className="mt-0.5 shrink-0 text-gray-500"
            />
            <p className="text-sm leading-relaxed text-gray-700">
              <span className="font-medium">Skills:</span>{" "}
              {student.skills?.join(", ")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
