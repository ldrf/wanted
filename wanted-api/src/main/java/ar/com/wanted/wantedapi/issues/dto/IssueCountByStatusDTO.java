package ar.com.wanted.wantedapi.issues.dto;

public class IssueCountByStatusDTO {
	private String status;
	private long count;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public long getCount() {
		return count;
	}
	public void setCount(long count) {
		this.count = count;
	}
	
	
	
}
