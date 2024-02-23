import { Button } from "@mui/material";

const DownloadCSV = ({ data, headers }: { data: any; headers: any }) => {
  function downloadCsv(filename: string): void {
    // join the data with comma
    const header = Object.keys(headers).join(",");
    const rows = (data as any)
      .map((item: any) => Object.values(item).join(","))
      .join("\n");

    //create csv format data
    const csvData = `${header}\n${rows}`;
   
    // Create a Blob from CSV data and trigger a download
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
   
    if ((navigator as any).msSaveBlob) {
      // For IE/Edge browsers
      (navigator as any).msSaveBlob(blob, filename);
    } else {
      // Create a tag and click on it to download the csv file
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  return (
    <>
      <Button
        variant="outlined"
        color="info"
        onClick={() => downloadCsv("sql-file")}
      >
        Download CSV
      </Button>
    </>
  );
};

export default DownloadCSV;
