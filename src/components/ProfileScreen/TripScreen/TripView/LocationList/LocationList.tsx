import React from "react";
import styled from "styled-components";
import { Location } from "types/types";
import LocationListItem from "./LocationListItem/LocationListItem";

const LocationListContainer = styled.div`
  .location-list {
    padding: ${({ theme }) => theme.spacing.space4};
  }
  .location-list-header {
    margin-bottom: ${({ theme }) => theme.spacing.space4};
    cursor: pointer;
  }
  .no-locations-view {
    height: 100%;
    border: 1px solid black;
  }
`;

interface Props {
  locations: Location[];
  onClickLocationListHeader: () => void;
}

const LocationList: React.FC<Props> = ({
  locations,
  onClickLocationListHeader
}) => {
  return (
    <LocationListContainer>
      {locations.length ? (
        <div className="location-list">
          <div
            onClick={onClickLocationListHeader}
            className="location-list-header"
          >
            Locations
          </div>
          <ul>
            {locations.map(location => (
              <LocationListItem location={location} key={location._id} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-locations-view" />
      )}
    </LocationListContainer>
  );
};

export default LocationList;
