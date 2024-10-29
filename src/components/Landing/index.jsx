import { useDisclosure, useSetState } from "@mantine/hooks";
import React, { useState } from "react";
import { Modal, Button, MantineProvider, NavLink } from "@mantine/core";
import Auth from "../Auth";

const Landing = () => {
  return (
    <div>
    <HeroSection />
    <ServiceHolder/>
    <CourseHolder/>
    <CourseCategory/>
    <TeacherHolder/>
    <NewsHolder/>
  </div>
  );
};

export default Landing;
