import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

function RefreshButton() {
  return (
    <Button type="default">
      <FontAwesomeIcon
        icon={faRotateRight}
        className="transitiona-all duration-300 hover:rotate-45"
      />
    </Button>
  );
}

export default RefreshButton;
