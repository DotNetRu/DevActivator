using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevActivator.Meetups.BL.Interfaces;
using DevActivator.Meetups.BL.Models;
using DevActivator.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevActivator.Controllers
{
    [Route("api/[controller]")]
    public class CompositeController : Controller
    {
        private readonly IMeetupService _meetupService;
        private readonly ITalkService _talkService;
        private readonly ISpeakerService _speakerService;

        public CompositeController(IMeetupService ms, ITalkService ts, ISpeakerService ss)
        {
            _meetupService = ms;
            _talkService = ts;
            _speakerService = ss;
        }

        [HttpPost("[action]/{meetupId?}")]
        public async Task<CompositeModel> GetMeetup([FromRoute] string meetupId, [FromBody] RandomConcatModel descriptor = null)
        {
            var meetup = await _meetupService.GetMeetupAsync(meetupId).ConfigureAwait(true);

            descriptor = descriptor ?? new RandomConcatModel();
            descriptor.Sessions = descriptor.Sessions ?? new List<SessionVm>();
            descriptor.TalkIds = descriptor.TalkIds ?? new List<string>();
            descriptor.SpeakerIds = descriptor.SpeakerIds ?? new List<string>();

            if (meetup?.Sessions != null)
            {
                descriptor.TalkIds.AddRange(meetup.Sessions.Select(x => x.TalkId));
            }

            var talks = new Dictionary<string, TalkVm>();
            foreach (var talkId in descriptor.TalkIds.Distinct())
            {
                var talk = await _talkService.GetTalkAsync(talkId).ConfigureAwait(true);
                talks.Add(talkId, talk);
            }

            descriptor.SpeakerIds.AddRange(
                talks.Select(x => x.Value).SelectMany(x => x.SpeakerIds.Select(s => s.SpeakerId))
            );

            var speakers = new Dictionary<string, SpeakerVm>();
            foreach (var speakerId in descriptor.SpeakerIds.Distinct())
            {
                var speaker = await _speakerService.GetSpeakerAsync(speakerId).ConfigureAwait(true);
                speakers.Add(speakerId, speaker);
            }

            return new CompositeModel
            {
                Sessions = meetup?.Sessions,
                Talks = talks,
                Speakers = speakers
            };
        }
    }
}