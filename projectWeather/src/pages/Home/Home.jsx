// import React from 'react'
import HeroSection from "../../components/HeroSection/HeroSection";
import WeatherTable from "../../components/WeatherTable/WeatherTable";
import Layout from "../../components/Layout/Layout";
import UserAuthentication from "../../Secuirity/UserAuthentication/UserAuthentication";


function Home() {
  return (
    // <UserAuthentication>
      <Layout>
        <HeroSection />
        <WeatherTable />
      </Layout>
    // </UserAuthentication>
  );
}

export default Home;
