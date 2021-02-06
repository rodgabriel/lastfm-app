import { useEffect } from "react";
import { useDispatch } from "react-redux";

// actions
import buscarArtistData from "../../actions/buscarArtistData";

const Index = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarArtistData(match.params.artist));
  }, [match, dispatch]);

  return <div>Artist Page</div>;
};

export default Index;
