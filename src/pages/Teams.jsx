import React from "react";
import Loader from "../components/UI/Loader/Loader";
import { useHttp } from "./../hooks/useHttp";
import config from "./../config";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/UI/Message/Message";
import StyledTable from "./../components/UI/Table/StyledTable";

const Teams = () => {
  const { loading, error, request, clearError } = useHttp();
  const [teams, setTeeams] = useState([]);
  const [tableHeader, setTableHeader] = useState(["№", "Name", "Member count"]);

  const getTeamsHandler = async () => {
    const data = await request(`${config.url}/teams`, "get");
    setTeeams(data);
  };
  useEffect(() => {
    getTeamsHandler();
    console.log(teams);
  }, []);

  if (error) {
    return (
      <>
        <Message>
          <p>Warrning! Can`t get data.</p>
        </Message>
      </>
    );
  } else {
    if (loading) {
      return <Loader></Loader>;
    } else {
      
      return (
        <div className="container__teams">
          <div className="container-title">
            <h1 className="head__title">Members</h1>
          </div>
          <div className="container__table">
            <StyledTable
              tableHeader={tableHeader}
              data={teams}
              type="teams"
            ></StyledTable>
          </div>
        </div>
      );
    }
  }
};

export default Teams;
