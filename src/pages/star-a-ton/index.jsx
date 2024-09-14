import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { db } from "../../lib/firebaseConfig";
import { collection, addDoc, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

export default function StarredCheckForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [hasStarredRepo, setHasStarredRepo] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsersData = async () => {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    // console.log(
    //   "Data:",
    //   querySnapshot.docs.map((doc) => doc.data())
    // );
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("name", name);
    setLoading(true);
    setResult(null);

    try {
      // Check for existing submission

      console.log("Checking for existing submission...");
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );

      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);

      if (!querySnapshot.empty) {
        setResult("You have already submitted the form.");
        setLoading(false);
        return;
      }
      setResult("All check passed for starred repo...");
      // Check for starred repositories
      const starredResponse = await axios.get(
        `https://api.github.com/users/${username}/starred`,
        {
          headers: {
            Authorization: `${process.env.PERSONAL_ACCESS_TOKEN}`,
          },
        }
      );
      const starredRepos = starredResponse.data.map((repo) => repo.name);
      if (!starredRepos.includes("conductor")) {
        setResult("Conductor repo not starred.");
        setLoading(false);
        return;
      }

      // setResult("All checks passed! Repository is starred.");

      try {
        await addDoc(collection(db, "users"), {
          name,
          email,
          phone,
          username,
          couponCode,
          timestamp: new Date(),
        });
        setResult("Data saved successfully!");
      } catch (error) {
        console.error("Error saving document: ", error);
        setResult("Error saving data.");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setResult("Error during form submission.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 h-auto bg-[#204289] p-8 space-y-6 justify-center text-white">
          <div className="flex  items-center justify-center">
            <div className="flex flex-col sm:flex-row  p-6 sm:p-8 rounded-lg">
              {/* <div className="flex justify-center sm:justify-start">
                <Image
                  src={"/assets/staraton1.1.png"}
                  alt={"staraton"}
                  width={300}
                  height={400}
                  className=""
                />
              </div> */}

              <div className="flex flex-col items-center justify-center sm:ml-8 mt-6 sm:mt-0 gap-10">
                <div className="flex flex-col items-center gap-8">
                  <div>
                    <button
                      className="font-clash-semi rounded-[15px]"
                      onClick={() =>
                        window.open(
                          "https://github.com/conductor-oss/conductor",
                          "_blank"
                        )
                      }
                    >
                      <span class="button_top">Star&nbsp; the&nbsp; Repo</span>
                    </button>
                  </div>
                  <div className="flex justify-end w-full z-10 md: -mt-16 "></div>
                </div>
                <ol className="list-none space-y-4 ml-7 mt-8 text-xl md:text-3xl font-clash-semi text-white tracking-wider">
                  <li className="flex flex-wrap items-center gap-2">
                    <span className="text-yellow-500 font-clash-semi text-base md:text-xl">
                      1.
                    </span>
                    <span className="text-sm md:text-xl">Star the</span>
                    <span className="text-yellow-500 font-clash-semi text-sm md:text-xl underline hover:text-amber-400">
                      <a href="https://github.com/conductor-oss/conductor">
                        Repo Here
                      </a>
                    </span>
                  </li>
                  <li className="flex flex-wrap items-center gap-2">
                    <span className="text-yellow-500 font-clash-semi text-base md:text-xl">
                      2.
                    </span>
                    <span className="text-sm md:text-xl">Fill the form</span>
                  </li>
                  <li className="flex flex-wrap items-start gap-2">
                    <span className="text-yellow-500 font-clash-semi text-base md:text-xl">
                      3.
                    </span>
                    <span className="text-sm md:text-xl w-48 md:w-2/3 ">
                      Get a chance to win{" "}
                      <span className="text-yellow-500">JBL</span> speakers{" "}
                      <span className="  text-sm md:text-xl">
                        and other Make-A-Ton goodies!
                      </span>
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="text-xs md:text-md font-satoshi-regular text-justify md:text-left  ">
            <span>
              Note: Personal details are only collected to contact you if you
              win prizes. <br />
              If you have privacy concerns,{" "}
              <span className="text-customYellow">
                you can simply submit your GitHub ID{" "}
              </span>
              to show that community spirit by starring the repo!
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto bg-white">
          <div className="md:hidden absolute ">
            <Image
              src="/assets/yellowthread.png"
              alt=""
              width={50}
              height={50}
              className="absolute ml-64 mt-0"
            />
            <Image
              src="/assets/arrowthread.png"
              alt=""
              width={50}
              height={50}
              className="-mt-8 ml-24"
            />
          </div>
          <div className="flex items-center justify-center min-h-screen bg-[#204289] px-4">
            <Image
              src={"/assets/racetrack.png"}
              alt={"logo"}
              width={320}
              height={100}
              className="absolute -top-48 right-0 hidden md:block"
            />
            <Image
              src={"/assets/hero_effect.png"}
              alt={"logo"}
              width={150}
              height={200}
              className="absolute top-0 left-0 hidden md:block"
              style={{ transform: "rotate(-180deg)" }}
            />
            <Image
              className="absolute bottom-0 left-0 hidden md:block"
              src={"/assets/makeaton_logo.png"}
              alt={"logo"}
              width={140}
              height={140}
            />
            <Image
              className="absolute bottom-0 right-0 hidden md:block"
              src={"/assets/hero_effect.png"}
              alt={"logo"}
              width={150}
              height={100}
            />

            <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-md relative">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-700 font-satoshi-bold mb-2">
                    GitHub Username*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your GitHub Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#204289]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-satoshi-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#204289]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-satoshi-bold mb-2">
                    Email-ID
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email-ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#204289]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-satoshi-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#204289]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-satoshi-bold mb-2">
                    Coupon Code{`(if any)`}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Coupon code if any"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#204289]"
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={hasStarredRepo}
                      required
                      onChange={() => setHasStarredRepo(!hasStarredRepo)}
                      className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-[#204289]"
                    />
                    <label className="text-gray-700">
                      Starred the{" "}
                      <a
                        href="https://github.com/conductor-oss/conductor"
                        className="underline"
                        target="_blank"
                      >
                        conductor
                      </a>{" "}
                      repo*
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full py-2 px-4 font-clash-semi text-white rounded-md ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#EAAF20]"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Checking..." : "Submit"}
                </button>
              </form>
              {result && (
                <p className="mt-6 text-center font-bold text-[#204289]">
                  {result}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
