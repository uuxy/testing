package webservice;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

//import org.codehaus.jettison.json.JSONArray;

@Path("/v1/status")
// removed * wildcard to make this more compatible with tomcat
public class V1_status {

	private static final String api_version = "00.02.00"; // version of the api

	@GET
	@Produces(MediaType.TEXT_HTML)
	public String returnTitle() {
		return "<p>Java Web Service</p>";
	}

	@Path("/version")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String returnVersion() {
		return "<p>Version:</p>" + api_version;
	}

	@GET
	@Path("/hello")
	@Produces("text/plain")
	public String hello() {
		return "Hello World!";
	}

	@GET
	@Path("/default")
	@Produces("text/plain")
	public String indexHtml() {
		return "will trigger a html file here";
	}	
	
}