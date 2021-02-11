import Page from "../components/Page";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./DeptPage.css";

export default function DeptPage() {
    const [selected, setSelect] = useState();

    return (
        <Page>
            <div className=" side-nav-container">
                <div className="side-nav">
                    ----    Departments  ----
                    <h4 onClick={() => setSelect(1)}>HomePage  </h4 >
                    <h4 onClick={() => setSelect(2)}> Computers </h4 >
                    <h4 onClick={() => setSelect(3)}> Electronics   </h4 >
                    <h4 onClick={() => setSelect(4)}> Graphics  </h4 >
                    <h4 onClick={() => setSelect(5)}> VFX    </h4 >
                    <h4 onClick={() => setSelect(6)}> Services   </h4 >
                    <h4 onClick={() => setSelect(7)}> CLoud     </h4 >

                </div>
                {selected == 1 && < div className="view">
                    <h1> Welcome to our Homepage !!!</h1>
                </div>}
                {selected == 2 && <div className="view"> <h2> We have Computers departments  </h2></div>}
                {selected == 3 && <div className="view"> <h2> We have Electronics departments  </h2> </div>}
                {selected == 4 && <div className="view"> <h2> We have Graphics departments  </h2> </div>}
                {selected == 5 && <div className="view"> <h2> We have VFX departments  </h2> </div>}
                {selected == 6 && <div className="view"> <h2> We have Service departments  </h2> </div>}
                {selected == 7 && <div className="view"> <h2> We have Cloud departments  </h2> </div>}
            </div>
        </Page >
    );
}