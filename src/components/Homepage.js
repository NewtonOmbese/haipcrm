import React from "react";

export default function Homepage() {
  return (
    <div class="flex flex-col items-center gap-5 py-16 text-center ">
      <div className="text-5xl font-black">Uwajibikaji Pamoja</div>
      <div className="text-2xl">
        Integrated Complaints Referral Mechanism At County Level
      </div>
      <div className="w-3/4 text-[20px] leading-7 ">
        Quality service and accountability from government and non governmental
        service providers is your right. TI Kenya and its partners will ensure
        your message is forwarded to the relevant aid or service provider and
        ensure that you are given a feedback.
      </div>
      <div className="text-[24px] leading-4">
        Send your complain via <span className="text-[#16b1b5] font-medium">SMS</span> to
        the number <span className="text-[#16b1b5] font-medium ">7777</span>
      </div>
    </div>
  );
}
