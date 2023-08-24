import React from "react";

const Qualification = () => {
  return (
    <>
      <div>
        <div>
          <div className="bg-darkcolor text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 tracking-widest">
              Computer Science Student Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 tracking-wider">
                  Internship at XYZ Tech
                </h3>
                <p className="text-sm tracking-wider">May 2022 - August 2022</p>
                <p className="text-sm tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  in consectetur mauris, eu cursus ipsum. Vivamus lacinia,
                  sapien eu euismod consectetur, nisl est pharetra lorem, eu
                  congue elit nulla eu neque.
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 tracking-wider">
                  Open Source Contributions
                </h3>
                <p className="text-sm">Ongoing</p>
                <p className="text-sm tracking-wide">
                  Contributed to several open-source projects on GitHub. Worked
                  on bug fixes, feature enhancements, and code refactoring.
                  Collaborated with developers from around the world and learned
                  best practices in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualification;
