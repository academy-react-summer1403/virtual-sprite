import { useDisclosure, useSetState } from "@mantine/hooks";
import React, { useState } from "react";
import { Modal, Button, MantineProvider, NavLink } from "@mantine/core";
import Auth from "../Auth";

const Landing = () => {
  const [authModal, setAuthModal] = useState(false);
  return (
    <>
      <MantineProvider>
        <Modal
          title="عنوان"
          className="dirAuth"
          opened={authModal}
          onClose={() => setAuthModal(false)}
          withCloseButton={true}
          radius={24}
        >
          {/* <div class="w-[356px] h-[156px] mb-[15px] rounded-[50px] border-[1px] border-[#CFD8DC]"> */}
          {/* {authModal === true && <Auth setAuthModal={setAuthModal} />} */}
          <Auth />

          {/* </div> */}
        </Modal>
        <Button
          onClick={() => {
            setAuthModal(true);
          }}
        >
          ورود
        </Button>
      </MantineProvider>
    </>
  );
};

export default Landing;
