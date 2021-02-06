import { useEffect } from "react";
import { useDispatch } from "react-redux";

// actions
import buscarAlbumData from "../../actions/buscarAlbumData";

const Index = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarAlbumData(match.params.artist, match.params.album));
  }, [match, dispatch]);

  return <div>Album Page</div>;
};

export default Index;
