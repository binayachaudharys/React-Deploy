import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';
import { Link } from 'react-router-dom'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title,url } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
      <Link to={url}> <h2>{title}</h2></Link>
       
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}; 

export default DirectoryItem;
