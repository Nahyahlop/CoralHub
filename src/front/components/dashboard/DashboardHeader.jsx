import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";

export const DashboardHeader = () => {
    const { store } = useGlobalReducer();

    const user = store.currentUser || {};
    const firstName = user.first_name || "there";

    return (
        <header className="dashboard-header">
            <div className="dashboard-header-content">
                <span className="dashboard-eyebrow">
                    Dashboard
                </span>

                <h1 className="dashboard-title">
                    Welcome back, {firstName}!
                </h1>

                <p className="dashboard-subtitle">
                    Here's your CoralHub activity overview.
                </p>
            </div>

            <Link
                to="/addproduct"
                className="publish-btn"
            >
                Publish Product
            </Link>
        </header>
    );
};