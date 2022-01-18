import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../store/actions/sampleAction";

const SampleComponent = () => {
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  return <>{JSON.stringify(sample)}</>;
};

export default SampleComponent;
