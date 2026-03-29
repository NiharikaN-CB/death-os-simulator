"use client";

import { useState } from "react";
import { useEffect } from "react";
import Desktop from "./components/Desktop";
import Window from "./components/Window";
import Countdown from "./components/Countdown";
import ChaosButton from "./components/ChaosButton";
import Certificate from "./components/Certificate";
import GrimCursor from "./components/GrimCursor";


export default function Home() {

  useEffect(() => {
  const messages = [
    "You cannot escape 😈",
    "Why are you still here?",
    "Go touch grass 🌱",
    "System watching you 👀",
  ];

  const interval = setInterval(() => {
    alert(messages[Math.floor(Math.random() * messages.length)]);
  }, 20000);

  return () => clearInterval(interval);
}, []);

  const [chaos, setChaos] = useState(false);

  const triggerChaos = () => {
    setChaos(true);

    setTimeout(() => {
      setChaos(false);
      alert("SYSTEM REBOOTED 💀 Go live your life 😭");
    }, 2000);
  };

return (
  <div className={chaos ? "invert glitch" : ""}>
    <GrimCursor />

    <Desktop>
      <Window title="death_countdown.exe" top="100px" left="100px">
        <Countdown />
      </Window>

      <Window title="chaos_reboot.exe" top="120px" left="450px">
        <ChaosButton triggerChaos={triggerChaos} />
      </Window>

      <Window title="error_log.txt" top="300px" left="250px">
        <p>Error 0xDEAD</p>
        <p>User cannot be deleted.</p>
      </Window>

      <Window title="survival_certificate.exe" top="300px" left="600px">
        <Certificate />
      </Window>
    </Desktop>
  </div>
);
}