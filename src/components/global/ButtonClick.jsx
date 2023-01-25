import { Button } from "@mui/material";

const ButtonClick = ({ title, primary, onClick, disabled }) => {
  return (
    <>
      {primary ? (
        <Button
          data-testid="button-click-primary"
          variant="contained"
          onClick={onClick}
          fullWidth
          size="large"
          sx={{
            marginTop: "1rem",
            // padding: '1rem',
            borderRadius: "1rem",
            backgroundColor: "#7126B5",
            boxShadow: "none",
          }}
        >
          {title}
        </Button>
      ) : (
        <>
          {disabled ? (
            <Button
              data-testid="button-click-disabled"
              variant="contained"
              onClick={onClick}
              disabled
              fullWidth
              size="large"
              sx={{
                marginTop: "1rem",
                // padding: '1rem',
                borderRadius: "1rem",
                backgroundColor: "#7126B5",
                boxShadow: "none",
                "&:disabled": {
                  color: "#fff",
                },
              }}
            >
              {title}
            </Button>
          ) : (
            <Button
            data-testid="button-click-secondary"
              variant="contained"
              color="secondary"
              onClick={onClick}
              fullWidth
              size="large"
              sx={{
                marginTop: "1rem",
                // padding: '1rem',
                borderRadius: "1rem",
                border: "1.1px solid #7126B5 ",
                backgroundColor: "#ffff",
                boxShadow: "none",
              }}
            >
              {title}
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default ButtonClick;
