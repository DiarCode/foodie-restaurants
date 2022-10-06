import NewRestaurantCreator from "components/Admin/Restaurants/NewRestaurantCreator";
import AdminRestaurant from "components/Admin/Restaurants/AdminRestaurant";
import Layout from "components/Layout/Layout";
import { NextPage } from "next";
import React from "react";
import AdminFoods from "components/Admin/Foods/AdminFoods";

const AdminHomePage: NextPage = () => {
  return (
    <Layout title="Admin">
      <h1 className="w-full py-5 px-5 font-semibold text-lg rounded-lg bg-gray-200 my-5">
        Admin dashboard
      </h1>
      <main className="w-full flex flex-col gap-8 my-8">
        <AdminRestaurant />
        <AdminFoods />
      </main>
    </Layout>
  );
};

export default AdminHomePage;
