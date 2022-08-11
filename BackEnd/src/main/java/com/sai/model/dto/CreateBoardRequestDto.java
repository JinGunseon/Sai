package com.sai.model.dto;

import java.util.List;

import com.sai.model.dto.board.InputBoardRequestDto;
import com.sai.model.dto.boardTagged.InputBoardTaggedRequestDto;
import com.sai.model.dto.poll.PollRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateBoardRequestDto {
	private InputBoardRequestDto inputBoardRequestDto;
	private PollRequest pollRequest;
	private List<InputBoardTaggedRequestDto> inputBoardTaggedRequestDtos;
}
