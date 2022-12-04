// import dynamic from 'next/dynamic';

// const WorldIDWidget =
//   dynamic (() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), { ssr: false });

// const WorldID = () => {
//   const callVar = async () => {
//     await axios.post ('https://developer.worldcoin.org/api/v1/verify', {
//     "action_id": "wid_dd40992a872216f47fe61daef31761dd",
//     "signal": "my_signal",
//     "proof": proof,
//     "nullifier_hash": nullifier_hash,
//     "merkle_root": merkle_root
//   })
//   .then(function (response) {
//     console.log(response.success);
//     // if (response.data.success === true) {
//     //   //
//     // } else {
//     //   throw new Error ("Verification failed");
//     // }
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   return (
//     <div className=" pt-100">
//     <h1> helloxyz</h1>
//   <WorldIDWidget
//   actionId="wid_dd40992a872216f47fe61daef31761dd" // obtain this from developer.worldcoin.org
//   signal="my_signal"
//   enableTelemetry
//   onSuccess={(proof) => console.log(proof)
//   // callVar (proof, nullifier_hash, merkle_root)
//   }
//   onError={(error) => console.error(error)}
//   debug={true} // to aid with debugging, remove in production
// />;
// <h1> helloabc</h1>
// </div>
//   );

// }
// }
// // {merkle_root: '0x01f1b5711430f8a53431b7a583ca25bec77185c01c80c8f2748c43b8a87839aa', nullifier_hash: '0x022a8255b934ed7803133a8071b46d3acac73102c3f29d7c5c05383e279aafb9', proof: '0x0e33fc24c3fca663dd4e81b853f0106f4d247c5e9567d444…f6dffa19ef9fd64d1229895bf46a254da0af9e30f04e96bbd'}

// export default WorldID;

import Link from "next/link";

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling

function Worldid() {
  async function Verify(nullifier_hash, merkle_root) {
    await axios
      .post("https://developer.worldcoin.org/api/v1/verify", {
        action_id: "wid_dd40992a872216f47fe61daef31761dd",
        signal: "my_signal",
        proof: proof,
        nullifier_hash: nullifier_hash,
        merkle_root: merkle_root,
      })
      .then(function (response) {
        console.log(response.success);
        if (response.data.success === true) {
          //
        } else {
          throw new Error("Verification failed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Link
      href="https://developer.worldcoin.org/hosted/wid_dd40992a872216f47fe61daef31761dd?signal=hardSignal"
      passHref
      legacyBehavior
    >

      click
    </Link>
  );
}

export default Worldid;
