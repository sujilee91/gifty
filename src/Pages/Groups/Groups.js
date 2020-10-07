import React, { useState, useRef, useMemo } from "react";
import { GiftyAccordion } from "../../Components/GiftyAccordion/GiftyAccordion";
import { GroupTitle } from "../../Components/GroupTitle";
import Card from "@material-ui/core/Card";
import { useStyles } from "../styles";
import { mockGroup } from "./mocks";
import { PageTitle } from "../../Components/PageTitle";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import { Dialog } from "../../Components/Dialog/Dialog";
import AddIcon from "@material-ui/icons/Add";
import GREEN from "@material-ui/core/colors/green";
import INDIGO from "@material-ui/core/colors/indigo";
import short from "short-uuid";
import { sleep } from "../../utils/sleep";

export const Groups = ({}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");

  return (
    <>
      <PageTitle title="Groups" />
      {mockGroup.map((group) => {
        const users = group.users;
        return (
          <>
            <InviteToGroupDialog dialogTitle={group.name} />
            <Card raised={false} className={classes.card}>
              <GroupTitle group={group} />
              <AccordionActions>
                {/* <Button size="small">Edit Group</Button> */}
                <Button size="small" color="primary">
                  Edit Group
                </Button>
              </AccordionActions>
              {users.map((user) => (
                <GiftyAccordion
                  user={user}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
            </Card>
          </>
        );
      })}
    </>
  );
};

const InviteToGroupDialog = ({ dialogTitle }) => {
  const [isCopied, setIsCopied] = useState(false);
  const inviteTextRef = useRef(null);

  const inviteLink = useMemo(
    () => `http://localhost:3000/invite/${short.generate()}`,
    []
  );

  const copyToClipboard = async (e) => {
    navigator.clipboard.writeText(inviteLink);
    setIsCopied(true);
    await sleep(1000);
    setIsCopied(false);
  };
  //TODO: Clean up styles, add transition property
  return (
    <Dialog
      title={`Invite Friends to ${dialogTitle}`}
      content={({ _handleHide }) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              padding: "24px 12px 38px 12px",
            }}
          >
            <span
              style={{
                position: "relative",
                textTransform: "capitalize",
                fontSize: "18px",
                opacity: "0.8",
                marginBottom: "36px",
                fontWeight: "400",
              }}
            >
              <div
                style={{
                  backgroundColor: "#88d498",
                  height: "4px",
                  width: "160px",
                  position: "absolute",
                  bottom: "-10px",
                  left: "-2x",
                  transform: "rotate(0.1deg)",
                  borderRadius: "2px",
                }}
              />
              Send this link to invite a friend to this group!
            </span>
            <div
              style={{
                "-webkit-transition": "background-color 2s linear",
                border: isCopied
                  ? `2px solid ${GREEN[400]}`
                  : `2px solid ${INDIGO[300]}`,
                boxSizing: "border-box",
                padding: "20px",
                backgroundColor: isCopied ? GREEN[200] : INDIGO[200],
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "12px",
                color: "white",
                width: "auto",
              }}
            >
              <span
                ref={inviteTextRef}
                style={{ marginRight: "24px", fontSize: "12px" }}
              >
                {inviteLink}
              </span>
              <Button
                onClick={copyToClipboard}
                disabled={isCopied}
                variant="contained"
                color="primary"
                style={{
                  minWidth: "90px",
                  backgroundColor: isCopied ? GREEN[600] : INDIGO[500],
                  color: "white",
                }}
              >
                {isCopied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        );
      }}
    >
      <Button variant="contained" color="primary" startIcon={<AddIcon />}>
        Invite Friends
      </Button>
    </Dialog>
  );
};
