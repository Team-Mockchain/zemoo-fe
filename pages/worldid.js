import Link from "next/link";

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
