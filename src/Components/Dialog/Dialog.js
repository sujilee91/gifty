import React from "react";
import MaterialDialog from "@material-ui/core/Dialog";
import MaterialDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useControlVisualState } from "../../Hooks/UseControlVisualState/UseControlVisualState";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Dialog = ({
  title,
  children,
  content,
  actions = null,
  scroll = "paper",
}) => {
  const [isOpen, { hide, show }] = useControlVisualState(false);
  const Content = content;
  const Actions = actions;
  return (
    <>
      {React.cloneElement(children, { onClick: show })}
      {isOpen && (
        <MaterialDialog
          scroll={scroll}
          onClose={hide}
          open={isOpen}
          fullWidth={400}
        >
          <MaterialDialogTitle
            id="scroll-dialog-title"
            style={{ borderBottom: "1px solid #e8e8e8" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 style={{ margin: "0" }} variant="h4">
                {title}
              </h4>
              <IconButton onClick={hide}>
                <CloseIcon />
              </IconButton>
            </div>
          </MaterialDialogTitle>
          <DialogContent
            dividers={scroll === "paper"}
            style={{ padding: "10px 15px" }}
          >
            <Content handleHide={hide} />
          </DialogContent>
          {actions && (
            <DialogActions style={{ borderTop: "1px solid #e8e8e8" }}>
              <Actions handleHide={hide} />
            </DialogActions>
          )}
        </MaterialDialog>
      )}
    </>
  );
};

export { Dialog };
