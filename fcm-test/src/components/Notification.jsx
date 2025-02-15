import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

function NotificationInput({ inputMessage, setInputMessage }) {
  return (
    <input
      type="text"
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
      placeholder="Enter notification message"
      className="p-2 border rounded-md w-full mt-2"
    />
  );
}

function NotificationButton({ onClick }) {
  return (
    <Button onClick={onClick} className="mt-4">
      Send FCM Notification
    </Button>
  );
}

function NotificationMessage({ message }) {
  return message ? <p className="mt-2 text-green-500">{message}</p> : null;
}

NotificationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

NotificationInput.propTypes = {
  inputMessage: PropTypes.string.isRequired,
  setInputMessage: PropTypes.func.isRequired,
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export { NotificationInput, NotificationButton, NotificationMessage };
