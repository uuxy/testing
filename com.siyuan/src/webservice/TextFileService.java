package webservice;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.siyuan.model.TextFile;

@Path("/input")
public class TextFileService {
	@GET
	@Path("/textfile")
	//@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public Response testFile(@PathParam("input") String input) throws IOException {
		
		String textfile = new TextFile().getText();
			
/*		InputStream inputstream = new FileInputStream("c:/xye/jsonfile.txt");
		InputStreamReader reader = new InputStreamReader(
				inputstream);
		BufferedReader br = new BufferedReader(reader);
		String string = "";
		String line;
		while ((line = br.readLine()) != null) {
			string += line + "\n";
		}
		br.close();*/
		return Response.status(200).entity(textfile).build();
		
	}

	@GET
	@Path("/verify")
	@Produces(MediaType.TEXT_PLAIN)
	public Response verifyService(@PathParam("input") String input, @PathParam("verify") String verify) {
		String result = "Rest service  Successfully started..";

		// return HTTP response 200 in case of success
		return Response.status(200).entity(result).build();
	}

}