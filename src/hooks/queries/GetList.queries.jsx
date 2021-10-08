import gql from 'graphql-tag';
import { MISSION_FIELDS, ROCKET_FIELDS } from './../fragment'
export const GET_LIST = gql`
  ${MISSION_FIELDS}
  ${ROCKET_FIELDS}
  query GetLaunches($after: String!) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        site
        mission {
          ...MissionFields
        }
        rocket {
          ...RocketFields
        }
        isBooked
      }
    }
  }
`;
