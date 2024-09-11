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
  const [hasStarredRepo, setHasStarredRepo] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // const getUsersData = async () => {
  //   const usersRef = collection(db, "users");
  //   const querySnapshot = await getDocs(usersRef);

  //   console.log(
  //     "Data:",
  //     querySnapshot.docs.map((doc) => doc.data())
  //   );
  // };

  // useEffect(() => {
  //   getUsersData();
  // }, []);

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
      console.log(querySnapshot);

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

              <div className="flex flex-col items-center justify-center sm:ml-8 mt-6 sm:mt-0">
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
                  <div className="flex justify-end w-full z-10 md: -mt-16 ">
                    {/* <svg
                      width="50"
                      height="50"
                      viewBox="0 0 241 274"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M78.7568 134.999L84.8448 145.96L95.8073 139.872L101.895 150.833L112.857 144.745L118.945 155.706L129.906 149.618L135.995 160.581L146.956 154.493L153.044 165.454L164.007 159.366L170.095 170.327L181.056 164.239L187.144 175.201L154.259 193.465L166.435 215.389L177.397 209.301L189.573 231.224L200.535 225.136L212.712 247.06L190.788 259.236L178.611 237.312L167.65 243.4L155.474 221.477L144.512 227.565L138.424 216.604L127.462 222.692L133.55 233.654L122.589 239.742L128.677 250.703L117.715 256.791L51.0473 136.756L62.0088 130.668L67.7954 141.087L78.7568 134.999Z"
                        fill="#20458A"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.0721 125.995L44.9605 125.795L55.9239 119.706L61.7103 130.124L72.6705 124.037L78.7587 134.999L67.7985 141.086L62.0121 130.667L51.0487 136.756L117.717 256.792L128.68 250.703L134.768 261.665L112.845 273.841L34.1119 132.083L45.0721 125.995ZM128.68 250.703L122.592 239.741L133.552 233.654L139.64 244.616L128.68 250.703ZM133.552 233.654L127.464 222.692L138.427 216.603L144.515 227.565L133.552 233.654ZM144.515 227.565L155.476 221.478L167.652 243.401L156.692 249.489L144.515 227.565ZM167.652 243.401L178.612 237.314L190.788 259.237L179.828 265.325L167.652 243.401ZM190.788 259.237L212.715 247.059L218.802 258.02L196.876 270.198L190.788 259.237ZM212.715 247.059L200.539 225.136L211.499 219.049L223.675 240.972L212.715 247.059ZM200.539 225.136L189.575 231.225L177.399 209.301L188.362 203.212L200.539 225.136ZM177.399 209.301L166.436 215.39L154.259 193.467L187.146 175.202L181.058 164.24L192.022 158.151L204.198 180.074L171.311 198.34L177.399 209.301ZM181.058 164.24L170.098 170.327L164.01 159.366L174.97 153.278L181.058 164.24ZM164.01 159.366L153.047 165.455L146.958 154.493L157.922 148.404L164.01 159.366ZM146.958 154.493L135.995 160.581L129.907 149.62L140.87 143.531L146.958 154.493ZM129.907 149.62L118.947 155.708L112.859 144.746L123.819 138.658L129.907 149.62ZM112.859 144.746L101.898 150.833L95.8102 139.871L106.77 133.784L112.859 144.746ZM95.8102 139.871L84.8469 145.96L78.7587 134.999L89.722 128.91L95.8102 139.871Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M46.2348 107.008L100.729 38.6123L73.3434 0.0771484L46.2348 107.008Z"
                        fill="#EAAF20"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.0473 142.889L46.2462 263.022L0.101562 268.544L25.0473 142.889Z"
                        fill="#EAAF20"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M57.4818 111.708L196.803 23.4286L240.787 53.9804L57.4818 111.708Z"
                        fill="#EAAF20"
                      />
                    </svg> */}
                  </div>
                </div>
                <ol className="list-none space-y-4 ml-7 mt-8 text-xl md:text-3xl font-clash-semi text-white tracking-wider">
                  <li className="flex flex-wrap items-center gap-2">
                    <span className="text-yellow-500 font-clash-semi text-base md:text-xl">
                      1.
                    </span>
                    <span className="text-sm md:text-base">Star the</span>
                    <span className="text-yellow-500 font-clash-semi text-sm md:text-base">
                      <a href="https://github.com/conductor-oss/conductor">
                        Repo Here
                      </a>
                    </span>
                  </li>
                  <li className="flex flex-wrap items-center gap-2">
                    <span className="text-yellow-500 font-clash-semi text-base md:text-xl">
                      2.
                    </span>
                    <span className="text-sm md:text-base">Fill the form</span>
                  </li>
                  <li className="flex flex-wrap items-start gap-2">
                    <span className="text-yellow-500 font-clash-semi text-base md:text-xl">
                      3.
                    </span>
                    <span className="text-sm md:text-base w-48 md:w-2/3 ">
                      Get a chance to win{" "}
                      <span className="text-yellow-500">JBL</span> speakers{" "}
                      <span className="  text-sm md:text-base">
                        and other Make-A-Ton goodies!
                      </span>
                    </span>

                    <div className=""></div>
                  </li>
                </ol>
              </div>
            </div>
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
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                    required
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
                    GitHub Username
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
                      repo
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
