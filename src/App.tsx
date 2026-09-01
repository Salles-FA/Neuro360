import { useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import BottomNav, { type TabId } from "./components/BottomNav";
import SOSFab from "./components/SOSFab";
import SOSOverlay from "./components/SOSOverlay";
import HomeScreen from "./screens/HomeScreen";
import JourneyScreen from "./screens/JourneyScreen";
import NetworkScreen from "./screens/NetworkScreen";
import TeamScreen from "./screens/TeamScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  const [tab, setTab] = useState<TabId>("home");
  const [sosOpen, setSosOpen] = useState(false);

  return (
    <div className="min-h-full w-full">
      <PhoneFrame>
        {tab === "home" && <HomeScreen />}
        {tab === "journey" && <JourneyScreen />}
        {tab === "network" && <NetworkScreen />}
        {tab === "team" && <TeamScreen />}
        {tab === "profile" && <ProfileScreen />}

        {!sosOpen && <SOSFab onClick={() => setSosOpen(true)} />}
        <BottomNav active={tab} onChange={setTab} />

        {sosOpen && <SOSOverlay onClose={() => setSosOpen(false)} />}
      </PhoneFrame>
    </div>
  );
}
