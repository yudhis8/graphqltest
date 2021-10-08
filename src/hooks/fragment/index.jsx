import gql from 'graphql-tag';

export const MISSION_FIELDS = gql`
  fragment MissionFields on Mission {
    name
    missionPatch(size: LARGE)
  }
`;

export const ROCKET_FIELDS = gql`
  fragment RocketFields on Rocket {
    id
    name
    type
  }
`;