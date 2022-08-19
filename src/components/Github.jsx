import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fetchusers } from "./Fetchuser";
import "../App.css";

import GithubCard from "./GithubCard";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Github = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUsers] = React.useState([]);
  const [page, setPage] = useState(1);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setLoading(true);
    // setError(false)
    Fetchusers("masai", page).then((res) => {
      setUsers(res.data.items);
      setLoading(false);
    }).catch = (err) => {
      setError(true);
      setLoading(false);
    };
    // .finally(() => {
    //     ;
    //   });
  }, [page]);
  const handleSearch = () => {
    setLoading(true);
    Fetchusers(query, page).then((res) => {
      setUsers(res.data.items);
      setLoading(false);
    }).catch = (err) => {
      setError(true);
      setLoading(false);
    };
  };
  // console.log(loading, error);

  
  return (
    <div 
    // style={{background:"white",color:"black"}}
    >
      
      <div
        className="upperhead"
      >
        <h1 style={{color:"black",fontSize:"50px",fontWeight:"bold"}}>Github Profile <span style={{color:"red",fontSize:"50px",fontWeight:"bold"}}>Seeker</span></h1>
        <Button onClick={toggleColorMode} style={{background:"lightblue"}}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <div style={{ padding: "20px" }}>
          <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div>
            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "grey",
                color: "wheat",
                border: "1px solid white",
                marginTop: "20px",
                borderRadius: "5px",
                padding: "0px 20px 0px 20px",
              }}
            >
              {loading ? "loading" : "SEARCH"}
            </button>
          </div>
          <div style={{ display: "flex", gap: "20px",justifyContent:"center" }}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
              style={{
                backgroundColor: "grey",
                marginTop: "20px",
                color: "wheat",
                border: "1px solid white",
                borderRadius: "5px",
                padding: "0px 20px 0px 20px",
              }}
            >
              pre
            </button>
            <h1 style={{ marginTop: "20px" }}>{page}</h1>
            <button
              onClick={() => setPage(page + 1)}
              style={{
                backgroundColor: "grey",
                color: "wheat",
                border: "1px solid white",
                borderRadius: "5px",
                marginTop: "20px",
                padding: "0px 20px 0px 20px",
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
      {error ? "please fill in text" : null}
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "repeat(3,1fr)",
            // backgroundColor: "white",
          }}
        >
          {user?.map((item) => (
            <div>
              <GithubCard key={item.id} data={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Github;
