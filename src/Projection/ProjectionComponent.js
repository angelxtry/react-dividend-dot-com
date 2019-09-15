import React from "react";
import styled from "styled-components";

import ProjectionQuadrantComponent from "./ProjectionQuadrantComponent";

const ProjectionComponent = () => {
  return (
    <Projection>
      <ProjectionTitle>Projected Dividend Income</ProjectionTitle>
      <ProjectionQuadrantComponent />
    </Projection>
  );
};

const Projection = styled.div`
  grid-area: projection;
  background-color: ${props => props.theme.baseBackgroundColor};
  font-size: ${props => props.theme.h4TitleFontSize};
`;

const ProjectionTitle = styled.h4`
  border: 1px solid #f1f1f1;
  margin: 0;
  padding: 9px 0 5px 12px;
`;

export default ProjectionComponent;
