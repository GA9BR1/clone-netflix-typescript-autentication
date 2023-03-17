import { AuthContext } from "./AuthContext";
import React from "react";
import {useContext, useEffect} from 'react'
import Signin from "../pages/Signin";
import {Navigate, redirect, useNavigate} from 'react-router-dom'
import { autocompleteClasses } from "@mui/material";

export const RequireAuth = ({ children } : { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth.email) {
          navigate("/login");
        }
      }, [navigate]);

    
    return children
}