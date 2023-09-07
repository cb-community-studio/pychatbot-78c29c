import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleIntentsPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("intents")
            .get(urlParams.singleIntentsId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Intents", type: "error", message: error.message || "Failed get intents" });
            });
    }, []);

    const goBack = () => {
        history.replace("/intents");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Intents</h3>
                </div>
                <p>intents/{urlParams.singleIntentsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            {/* <label className="text-sm">tags</label>
                    <p className="m-0" >{data?.tags}</p>
                    <label className="text-sm">patterns</label>
                    <p className="m-0" >{data?.patterns}</p>
                    <label className="text-sm">responses</label>
                    <p className="m-0" >{data?.responses}</p> */}
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleIntentsPage);
