import React, { useState, useRef, useEffect } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Tooltip,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import noImg from "./noImg";
//icons
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
//redux
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/actions/posts";

const Form = ({ setCurrentId, currentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]); //dependecies array
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please log in to create your own memories and like other's memories
        </Typography>
      </Paper>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //updating a memory
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      //creating a memory
    } else {
      if (postData.selectedFile === "") {
        postData.selectedFile = noImg;
      }
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  const handleOnChange = (e) => {
    if (e.target.name === "tags") {
      const tags = e.target.value.split(",");
      setPostData({ ...postData, tags });
    } else setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleOpenFS = () => {
    inputFile.current.childNodes[0].click();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleOnChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleOnChange}
          multiline={true}
          rows="3"
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleOnChange}
        />
        <div
          ref={inputFile}
          className={classes.fileInput}
          style={{ height: 0, margin: 0 }}
        >
          <FileBase
            type="file"
            accept="image/jpg"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Tooltip title="Upload picture">
          <Button
            className={classes.buttonAddIcon}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleOpenFS}
          >
            <Typography align="center" variant="h5" style={{ display: "flex" }}>
              <AddAPhotoIcon className={classes.addPhotoIcon} />
            </Typography>
          </Button>
        </Tooltip>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
