import "./LeadlistPage.css";
import Topbar from "./components/Topbar";
import LeftBar from "./components/LeftBar";
import TitleBar from "./components/Titlebar";
import Filterbar from "./components/Filterbar";
import Mainlist from "./components/Mainlist";
export default function LeadListPage() {

  

  return (
    <>
      <div className="Leadlist_page">
        <div className="div1">
          <Topbar />
        </div>
        <div className="div2">
          <div className="div2_left">
            <LeftBar />
          </div>
          <div className="div2_right">
            <div className="Leadlist_TitleBar">
              <TitleBar />
            </div>
            <div className="Leadlist_Filterbar">
              <Filterbar />
            </div>
            <div className="Mainlist">
              <Mainlist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
