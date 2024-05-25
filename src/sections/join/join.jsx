import React from "react";

const Join = () => {
    return (
        <div className=" font-satoshi-regular p-5 m-20 md:ml-20 md:mr-20 ml-1 mr-1">
            <h1 className="text-3xl font-satoshi-bold mb-9 ml-2" style={{color: "#204289"}}>WHY JOIN MAKE-A-TON?</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="p-5 mx-auto" style={{background: "#204289", color: "white", maxWidth: '95%'}}>
                    <p>Meet students from all over India and be exposed to a wide range of ideas.</p>
                </div>
                <div className="p-5 mx-auto" style={{maxWidth: '95%', background: "#EAAF20"}}>
                    <p>Get mentored from industry experts to help you build better.</p>
                </div>
                <div className="p-5 mx-auto" style={{background: "#204289", color: "white", maxWidth: '95%'}}>
                    <p>Opportunity to take home prizes and exclusive swags.</p>
                </div>
            </div>
        </div>


    );
};

export default Join;
