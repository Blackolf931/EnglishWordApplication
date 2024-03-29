﻿using AutoMapper;
using Bll.Models;
using DAL.Entities;

namespace Bll.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<EnglishWordModel, EnglishWordEntity>().ReverseMap();
        }
    }
}
