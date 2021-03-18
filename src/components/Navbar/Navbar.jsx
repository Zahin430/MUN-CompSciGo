import React from 'react'
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";

import {ReviewFormDialog} from '../ReviewFormDialog/ReviewFormDialog';
import { auth } from '../../firebase/firebase.utils';

export const Navbar = ({ currentUser }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-sm">
        <span className="navbar-brand mb-0 h1">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            MUN COMPSCI
          </Link>
        </span>
        <ul class="navbar-nav ml-auto p-2">
          <li class="nav-item mr-3">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Post Review
            </Button>
            <ReviewFormDialog open={open} onModalClose={handleClose} />
          </li>

          {currentUser ? (
            <li
              className="nav-item"
              onClick={() => auth.signOut()}
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              Log Out
            </li>
          ) : (
            <li className="nav-item">
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
}
